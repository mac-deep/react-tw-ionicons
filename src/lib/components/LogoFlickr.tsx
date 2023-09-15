import React, { SVGProps } from 'react'

type LogoFlickrProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function LogoFlickr({ extraStyles, ...rest }: LogoFlickrProps) {
  const defaultProps: LogoFlickrProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: LogoFlickrProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M256,32h0C132.8,32,32,132.8,32,256h0c0,123.2,100.8,224,224,224h0c123.2,0,224-100.8,224-224h0C480,132.8,379.2,32,256,32ZM173.84,312A56,56,0,1,1,228,257.84,56,56,0,0,1,173.84,312Zm168,0A56,56,0,1,1,396,257.84,56,56,0,0,1,341.84,312Z" />
      </svg>
    </>
  )
}
