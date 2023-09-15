import React, { SVGProps } from 'react'

type JournalSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function JournalSharp({ extraStyles, ...rest }: JournalSharpProps) {
  const defaultProps: JournalSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: JournalSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M290,32H104A24,24,0,0,0,80,56V456a24,24,0,0,0,24,24H290Z" />
        <path d="M408,32H350V480h58a24,24,0,0,0,24-24V56A24,24,0,0,0,408,32Z" />
      </svg>
    </>
  )
}
