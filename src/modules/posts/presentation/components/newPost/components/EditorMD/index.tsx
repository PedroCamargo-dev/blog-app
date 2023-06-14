import { useState, useRef, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import Button from '@/common/components/Button'
import {
  RiHeading,
  RiItalic,
  RiListOrdered,
  RiListUnordered,
  RiLink,
  RiCodeSSlashFill,
  RiImage2Line,
} from 'react-icons/ri'
import { BiBold } from 'react-icons/bi'
import { GrBlockQuote } from 'react-icons/gr'
import { BsFullscreen, BsFullscreenExit } from 'react-icons/bs'
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarLeftExpand,
} from 'react-icons/tb'
import Input from '@/common/components/Input'

export default function EditorMD({ register }: any) {
  const [markdownSource, setMarkdownSource] = useState('')
  const [hidden, setHidden] = useState()
  const textareaRef = useRef(null)
  const [hiddenTextarea, setHiddenTextarea] = useState<boolean>(false)
  const [hiddenMarkdown, setHiddenMarkdown] = useState<boolean>(false)
  const [fullScreen, setFullScreen] = useState<boolean>(false)

  const headers = [
    { level: 1, label: 'H₁ Cabeçalho 1', markdown: '# ' },
    { level: 2, label: 'H₂ Cabeçalho 2', markdown: '## ' },
    { level: 3, label: 'H₃ Cabeçalho 3', markdown: '### ' },
    { level: 4, label: 'H₄ Cabeçalho 4', markdown: '#### ' },
    { level: 5, label: 'H₅ Cabeçalho 5', markdown: '##### ' },
  ]

  const insertMarkdown = (markdown: string) => {
    const textarea: string | null | any = textareaRef.current
    const { selectionStart, selectionEnd, value }: string | null | any =
      textarea
    const newValue = `${value.substring(
      0,
      selectionStart
    )}${markdown}${value.substring(selectionEnd)}`
    setMarkdownSource(newValue)
    textarea.focus()
    textarea.setSelectionRange(
      selectionStart + markdown.length,
      selectionStart + markdown.length
    )
  }

  const handleHiddenTextarea = () => {
    setHiddenTextarea(!hiddenTextarea)
  }

  const handleHiddenMarkdown = () => {
    setHiddenMarkdown(!hiddenMarkdown)
  }

  const handleFullScreen = () => {
    setFullScreen(!fullScreen)
  }

  const onChange = ({ currentTarget: { value } }: string | any) => {
    setMarkdownSource(value)
  }

  return (
    <div
      className={`${
        !fullScreen ? 'mt-40 w-[878px]' : 'z-100 fixed -mt-28 w-full'
      } grid grid-cols-1`}
    >
      <div className={`${fullScreen ? 'hidden' : 'show'}`}>
        <Input
          type="text"
          extraClass="border-dark-violet-500 -mb-5 w-full hover:border-dark-violet-100 focus:border-dark-violet-100 duration-300"
          id="title"
          placeholder="Titulo"
          name={{ ...register('title') }}
        />
      </div>
      <div className="mt-10 flex justify-between bg-dark-blue-500 text-white">
        <div className="flex p-0.5">
          <Button
            type="button"
            label={<RiHeading />}
            extraClass="p-3 peer hover:bg-white hover:text-dark-blue-500 rounded-lg duration-300 w-10"
          />
          <Button
            type="button"
            label={<BiBold />}
            onClick={() => insertMarkdown('** **')}
            extraClass="p-3 hover:bg-white hover:text-dark-blue-500 rounded-lg duration-300 w-10"
          />
          <Button
            type="button"
            label={<RiItalic />}
            onClick={() => insertMarkdown('* *')}
            extraClass="p-3 hover:bg-white hover:text-dark-blue-500 rounded-lg duration-300 w-10"
          />
          <Button
            type="button"
            label={<GrBlockQuote />}
            onClick={() => insertMarkdown('> ')}
            extraClass="p-3 hover:bg-white hover:text-dark-blue-500 rounded-lg duration-300 w-10"
          />
          <Button
            type="button"
            label={<RiListOrdered />}
            onClick={() =>
              insertMarkdown(`1. First item\n2. Second item\n3. Third item\n`)
            }
            extraClass="p-3 hover:bg-white hover:text-dark-blue-500 rounded-lg duration-300 w-10"
          />
          <Button
            type="button"
            label={<RiListUnordered />}
            onClick={() =>
              insertMarkdown(`- First item\n- Second item\n- Third item\n`)
            }
            extraClass="p-3 hover:bg-white hover:text-dark-blue-500 rounded-lg duration-300 w-10"
          />
          <Button
            type="button"
            label={<RiCodeSSlashFill />}
            onClick={() => insertMarkdown('```\n\n```')}
            extraClass="p-3 hover:bg-white hover:text-dark-blue-500 rounded-lg duration-300 w-10"
          />
          <Button
            type="button"
            label={<RiLink />}
            onClick={() => insertMarkdown('[title](https://www.example.com)')}
            extraClass="p-3 hover:bg-white hover:text-dark-blue-500 rounded-lg duration-300 w-10"
          />
          <Button
            type="button"
            label={<RiImage2Line />}
            onClick={() =>
              insertMarkdown(
                '![alt text](https://www.fnordware.com/superpng/pnggrad16rgb.png)'
              )
            }
            extraClass="p-3 hover:bg-white hover:text-dark-blue-500 rounded-lg duration-300 w-10"
          />
          <div className="fixed mr-10 mt-9 hidden w-40 flex-col rounded-sm border border-light-grayish-blue bg-white shadow-lg shadow-md hover:flex peer-hover:flex">
            {headers.map((header) => (
              <Button
                type="button"
                key={header.level}
                label={header.label}
                onClick={() => insertMarkdown(header.markdown)}
                extraClass="p-2 py-2 border-light-grayish-blue hover:bg-light-grayish-blue text-dark-blue-500"
              />
            ))}
          </div>
        </div>
        <div className="flex p-0.5">
          <Button
            type="button"
            label={<TbLayoutSidebarLeftCollapse />}
            onClick={() => handleHiddenTextarea()}
            extraClass="p-3 hover:bg-white hover:text-dark-blue-500 rounded-lg duration-300 w-10"
          />
          <Button
            type="button"
            label={<TbLayoutSidebarLeftExpand />}
            onClick={() => handleHiddenMarkdown()}
            extraClass="p-3 hover:bg-white hover:text-dark-blue-500 rounded-lg duration-300 w-10"
          />
          <Button
            type="button"
            label={fullScreen ? <BsFullscreenExit /> : <BsFullscreen />}
            onClick={() => handleFullScreen()}
            extraClass="p-3 hover:bg-white hover:text-dark-blue-500 rounded-lg duration-300 w-10"
          />
        </div>
      </div>
      <div
        className={`${!fullScreen ? '' : 'w-full'} grid h-full grid-cols-${
          hiddenTextarea || hiddenMarkdown ? '1' : '2'
        } border border-light-grayish-blue`}
      >
        <div>
          <textarea
            {...register('content')}
            onChange={onChange}
            value={markdownSource}
            className={`${
              !fullScreen ? 'h-96 bg-opacity-10' : 'min-h-screen'
            } w-full resize-none border-r-[1px] border-dark-blue-500 border-opacity-70 bg-light-grayish-blue p-3 outline-none duration-200	focus:bg-white ${
              hiddenTextarea ? 'hidden' : 'show'
            }`}
          />
        </div>
        <div className="bg-white">
          <ReactMarkdown
            className={`prose ${
              !fullScreen ? 'h-96 w-full' : 'min-w-screen max-h-screen bg-white'
            } overflow-y-scroll break-all p-3	 ${
              hiddenMarkdown ? 'hidden' : 'show'
            }`}
          >
            {markdownSource}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}
