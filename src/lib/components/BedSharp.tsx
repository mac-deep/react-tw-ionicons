import React, { SVGProps } from 'react'

type BedSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function BedSharp({ extraStyles, ...rest }: BedSharpProps) {
  const defaultProps: BedSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: BedSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M432,224V96a16,16,0,0,0-16-16H96A16,16,0,0,0,80,96V224a48,48,0,0,0-48,48V432H68V400H444v32h36V272A48,48,0,0,0,432,224Zm-192,0H120V192a16,16,0,0,1,16-16h88a16,16,0,0,1,16,16Zm32-32a16,16,0,0,1,16-16h88a16,16,0,0,1,16,16v32H272Z" />
      </svg>
    </>
  )
}
