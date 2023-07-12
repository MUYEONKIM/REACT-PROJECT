import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { gql, useMutation } from '@apollo/client' 
import BoardWriteUI from './BoardWriter.presenter';
import { CREATE_BOARD } from './BoardWriter.queries';

export default function BoardsWriteContainer() {
  const router = useRouter()
  const [isActive, setIsActive] = useState(true)

  const [createBoard] = useMutation(CREATE_BOARD)

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
      console.log(result.data.createBoard._id)
      alert("게시물이 정상적으로 등록되었습니다.")
      router.push(`/boards/${result.data.createBoard._id}`)
    } catch(error) {
    alert(error.message)
    }
  }
  const onInValid = (error) => {
    console.log("에러입니다", error)
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
    isActive = {isActive}
  />
}