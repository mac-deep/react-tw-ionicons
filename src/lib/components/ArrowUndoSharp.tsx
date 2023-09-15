import React, { SVGProps } from 'react'

type ArrowUndoSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ArrowUndoSharp({ extraStyles, ...rest }: ArrowUndoSharpProps) {
  const defaultProps: ArrowUndoSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ArrowUndoSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M464,440l-28.12-32.11c-22.48-25.65-43.33-45.45-72.08-58.7-26.61-12.26-60-18.65-104.27-19.84V432L48,252,259.53,72V175.21c72.88,3,127.18,27.08,161.56,71.75C449.56,284,464,335.19,464,399.26Z" />
      </svg>
    </>
  )
}
