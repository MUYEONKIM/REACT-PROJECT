import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client' 
import BoardWriteUI from './BoardWriter.presenter';
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWriter.queries';

export default function BoardsWriteContainer(props) {
  const router = useRouter()
  const [isActive, setIsActive] = useState(true)

  const [createBoard] = useMutation(CREATE_BOARD)
  const [updateBoard] = useMutation(UPDATE_BOARD)

  const { 
    register,
    watch,
    handleSubmit,
    formState: { errors }
   } = useForm();

  const onChangeWriter = (e) => {
   e.target.value && watch("password") && watch("title") && watch("contents") ? setIsActive(false) : setIsActive(true)
  }
  const onChangePassword = (e) => {
   e.target.value && watch("writer") && watch("title") && watch("contents") ? setIsActive(false) : setIsActive(true)
  }
  const onChangeTitle = (e) => {
   e.target.value && watch("password") && watch("writer") && watch("contents") ? setIsActive(false) : setIsActive(true)
  }
  const onChangeContents = (e) => {
   e.target.value && watch("password") && watch("title") && watch("writer") ? setIsActive(false) : setIsActive(true)
  }

  const onValid = async (data) => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            title: data.title,
            password: data.password,
            contents: data.contents,
          }
        }
      })
      alert("게시물이 정상적으로 등록되었습니다.")
      router.push(`/boards/${result.data.createBoard._id}`)
    } catch(error) {
      alert(error.message)
    }
  }
  const onInValid = (error) => {
    console.log("에러입니다", error)
  }

  const onClickUpdate = async (data) => {
    if (!data.title && !data.contents) {
      alert("수정한 내용이 없습니다.");
      return;
    }

    if (!data.password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    const updataBoardInput = {}
    if (data.title) updataBoardInput.title = data.title;
    if (data.contents) updataBoardInput.contents = data.contents;
    try {
      const result = await updateBoard({
        variables: {
          updateBoardInput : updataBoardInput,
          password : data.password,
          boardId : router.query.boardid,
        }
      })
      router.push(`/boards/${result.data.updateBoard._id}`)
    } catch(error) {
      alert(error.message)
    }
  }
  return <BoardWriteUI 
    onValid = {onValid}
    oninValid = {onInValid}
    register = {register}
    handleSubmit = {handleSubmit}
    errors = {errors}
    onChangeContents = {onChangeContents}
    onChangeTitle = {onChangeTitle}
    onChangePassword = {onChangePassword}
    onChangeWriter = {onChangeWriter}
    onClickUpdate = {onClickUpdate}
    isActive={isActive}
    isEdit={props.isEdit}
    data = {props.data?.fetchBoard}
  />
}