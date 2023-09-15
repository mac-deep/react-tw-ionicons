import React, { SVGProps } from 'react'

type ChatboxEllipsesProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ChatboxEllipses({ extraStyles, ...rest }: ChatboxEllipsesProps) {
  const defaultProps: ChatboxEllipsesProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ChatboxEllipsesProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M408,48H104a72.08,72.08,0,0,0-72,72V312a72.08,72.08,0,0,0,72,72h24v64a16,16,0,0,0,26.25,12.29L245.74,384H408a72.08,72.08,0,0,0,72-72V120A72.08,72.08,0,0,0,408,48ZM160,248a32,32,0,1,1,32-32A32,32,0,0,1,160,248Zm96,0a32,32,0,1,1,32-32A32,32,0,0,1,256,248Zm96,0a32,32,0,1,1,32-32A32,32,0,0,1,352,248Z" />
      </svg>
    </>
  )
}
