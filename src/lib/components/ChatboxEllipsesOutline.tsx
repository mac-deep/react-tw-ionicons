import React, { SVGProps } from 'react'

type ChatboxEllipsesOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ChatboxEllipsesOutline({ extraStyles, ...rest }: ChatboxEllipsesOutlineProps) {
  const defaultProps: ChatboxEllipsesOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ChatboxEllipsesOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path
          d="M408,64H104a56.16,56.16,0,0,0-56,56V312a56.16,56.16,0,0,0,56,56h40v80l93.72-78.14a8,8,0,0,1,5.13-1.86H408a56.16,56.16,0,0,0,56-56V120A56.16,56.16,0,0,0,408,64Z"
          style={{ fill: 'none', stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: '32px' }}
        />
        <circle cx="160" cy="216" r="32" />
        <circle cx="256" cy="216" r="32" />
        <circle cx="352" cy="216" r="32" />
      </svg>
    </>
  )
}
