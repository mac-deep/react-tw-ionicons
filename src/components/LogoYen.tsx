import { SVGProps, SVGAttributes } from 'react'

type LogoYenProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function LogoYen({ extraStyles, extraClasses, ...rest }: LogoYenProps) {
  const defaultProps: LogoYenProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: LogoYenProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M448,32H368L256,253.13,144,32H64L176.37,240H128v48h73.56L216,319v17H128v48h88v96h80V384h88V336H296V319l14.89-31H384V240H335.71Z" />
      </svg>
    </>
  )
}
