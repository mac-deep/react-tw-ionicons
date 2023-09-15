import React, { SVGProps } from 'react'

type BuildProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function Build({ extraStyles, ...rest }: BuildProps) {
  const defaultProps: BuildProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: BuildProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M469.54,120.52h0a16,16,0,0,0-25.54-4L382.56,178a16.12,16.12,0,0,1-22.63,0L333.37,151.4a16,16,0,0,1,0-22.63l61.18-61.19a16,16,0,0,0-4.78-25.92h0C343.56,21,285.88,31.78,249.51,67.88c-30.9,30.68-40.11,78.62-25.25,131.53a15.89,15.89,0,0,1-4.49,16L53.29,367.46a64.17,64.17,0,1,0,90.6,90.64L297.57,291.25a15.9,15.9,0,0,1,15.77-4.57,179.3,179.3,0,0,0,46.22,6.37c33.4,0,62.71-10.81,83.85-31.64C482.56,222.84,488.53,157.42,469.54,120.52ZM99.48,447.15a32,32,0,1,1,28.34-28.35A32,32,0,0,1,99.48,447.15Z" />
      </svg>
    </>
  )
}
