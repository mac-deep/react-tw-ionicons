import React, { SVGProps } from 'react'

type ReloadSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ReloadSharp({ extraStyles, ...rest }: ReloadSharpProps) {
  const defaultProps: ReloadSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ReloadSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path
          d="M400,148l-21.12-24.57A191.43,191.43,0,0,0,240,64C134,64,48,150,48,256s86,192,192,192A192.09,192.09,0,0,0,421.07,320"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'square',
            strokeMiterlimit: '10',
            strokeWidth: '32px',
          }}
        />
        <path d="M464,68.45V220a4,4,0,0,1-4,4H308.45a4,4,0,0,1-2.83-6.83L457.17,65.62A4,4,0,0,1,464,68.45Z" />
      </svg>
    </>
  )
}
