import React, { SVGProps } from 'react'

type FilterCircleSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function FilterCircleSharp({ extraStyles, ...rest }: FilterCircleSharpProps) {
  const defaultProps: FilterCircleSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: FilterCircleSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm48,304H208V320h96Zm48-64H160V256H352Zm32-64H128V192H384Z" />
      </svg>
    </>
  )
}
