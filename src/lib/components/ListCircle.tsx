import React, { SVGProps } from 'react'

type ListCircleProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ListCircle({ extraStyles, ...rest }: ListCircleProps) {
  const defaultProps: ListCircleProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ListCircleProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM168,350a24,24,0,1,1,24-24A24,24,0,0,1,168,350Zm0-71a24,24,0,1,1,24-24A24,24,0,0,1,168,279Zm0-73a24,24,0,1,1,24-24A24,24,0,0,1,168,206ZM352,341H224a16,16,0,0,1,0-32H352a16,16,0,0,1,0,32Zm0-71H224a16,16,0,0,1,0-32H352a16,16,0,0,1,0,32Zm0-72H224a16,16,0,0,1,0-32H352a16,16,0,0,1,0,32Z" />
      </svg>
    </>
  )
}
