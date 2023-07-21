import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client' 
import BoardWriteUI from './BoardWriter.presenter';
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWriter.queries';
import type { FormValue, BoardData, IBoardWritePropsUI } from './BoardWriter.types';
import type {ChangeEvent} from "react"
import type { IMutation, IMutationCreateBoardArgs, IMutationUpdateBoardArgs, IUpdateBoardInput } from '../../../../commons/types/generated/types';
import type { Address } from 'react-daum-postcode';

export default function BoardsWriteContainer(props: IBoardWritePropsUI): JSX.Element {
  const router = useRouter();
  const [isActive, setIsActive] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [addressDetail, setAddressDetail] = useState("")

  const [createBoard] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(CREATE_BOARD)
  const [updateBoard] = useMutation<Pick<IMutation, "updateBoard">, IMutationUpdateBoardArgs>(UPDATE_BOARD)

  const { 
    register,
    watch,
    handleSubmit,
    formState: { errors }
   } = useForm<FormValue>();

  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>) => {
   e.target.value && watch("password") && watch("title") && watch("contents") ? setIsActive(false) : setIsActive(true)
  }
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
   e.target.value && watch("writer") && watch("title") && watch("contents") ? setIsActive(false) : setIsActive(true)
  }
  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
   e.target.value && watch("password") && watch("writer") && watch("contents") ? setIsActive(false) : setIsActive(true)
  }
  const onChangeContents = (e: ChangeEvent<HTMLTextAreaElement>) => {
   e.target.value && watch("password") && watch("title") && watch("writer") ? setIsActive(false) : setIsActive(true)
  }

  const onChangeAddressDetail = (e: ChangeEvent<HTMLInputElement>): void => {
    setAddressDetail(e.target.value)
  }

  const onClickAddressSearch = (e: any): void => {
    e.preventDefault();
    e.stopPropagation();
    setIsModalOpen((prev) => !prev)
  }

  const onClickAddress = (data: Address): void => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsModalOpen((prev) => !prev);
  }

  const onValid = async (data: BoardData): Promise<void> => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            title: data.title,
            password: data.password,
            contents: data.contents,
            youtubeUrl: data.youtubeUrl,
            boardAddress: 
            {
              zipcode,
              address,
              addressDetail,
            },
          }
        }
      })
      alert("게시물이 정상적으로 등록되었습니다.")
      if (result.data?.createBoard._id === undefined) {
        alert("요청에 문제가 있습니다.");
        return;
      }
      void router.push(`/boards/${result.data?.createBoard._id}`)
    } catch(error: any) {
      alert(error.message)
    }
  }

  const onClickUpdate = async (data: BoardData): Promise<void> => {
    if (!data.title && !data.contents) {
      alert("수정한 내용이 없습니다.");
      return;
    }

    if (!data.password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    const updataBoardInput: IUpdateBoardInput = {}
    if (data.title) updataBoardInput.title = data.title;
    if (data.contents) updataBoardInput.contents = data.contents;
    try {
      if (typeof router.query.boardid !== "string") {
        alert("시스템에 문제가 있습니다.");
        return;
      }
      const result = await updateBoard({
        variables: {
          boardId : router.query.boardid,
          updateBoardInput : updataBoardInput,
          password : data.password,
        }
      })
      if (result.data?.updateBoard._id === undefined) {
        alert("요청에 문제가 있습니다.");
        return;
      }
      void router.push(`/boards/${result.data?.updateBoard._id}`)
    } catch(error) {
      if (error instanceof Error) alert(error.message);
    }
  }


  return <BoardWriteUI 
    onValid = {onValid}
    register = {register}
    handleSubmit = {handleSubmit}
    errors = {errors}
    onChangeContents = {onChangeContents}
    onChangeTitle = {onChangeTitle}
    onChangePassword = {onChangePassword}
    onChangeWriter = {onChangeWriter}
    onChangeAddressDetail = {onChangeAddressDetail}
    onClickUpdate = {onClickUpdate}
    onClickAddressSearch = {onClickAddressSearch}
    isModalOpen={isModalOpen}
    isActive={isActive}
    isEdit={props.isEdit}
    data = {props.data}
    onClickAddress = {onClickAddress}
    zipcode = {zipcode}
    address = {address}
  />
}