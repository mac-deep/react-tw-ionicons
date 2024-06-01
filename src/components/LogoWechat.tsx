import { SVGProps, SVGAttributes } from 'react'

type LogoWechatProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function LogoWechat({ extraStyles, extraClasses, ...rest }: LogoWechatProps) {
  const defaultProps: LogoWechatProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: LogoWechatProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path
          id="XMLID_501_-1"
          data-name="XMLID 501 -1"
          d="M408.67,298.53a21,21,0,1,1,20.9-21,20.85,20.85,0,0,1-20.9,21m-102.17,0a21,21,0,1,1,20.9-21,20.84,20.84,0,0,1-20.9,21M458.59,417.39C491.1,394.08,512,359.13,512,319.51c0-71.08-68.5-129.35-154.41-129.35S203.17,248.43,203.17,319.51s68.5,129.34,154.42,129.34c17.41,0,34.83-2.33,49.92-7,2.49-.86,3.48-1.17,4.64-1.17a16.67,16.67,0,0,1,8.13,2.34L454,462.83a11.62,11.62,0,0,0,3.48,1.17,5,5,0,0,0,4.65-4.66,14.27,14.27,0,0,0-.77-3.86c-.41-1.46-5-16-7.36-25.27a18.94,18.94,0,0,1-.33-3.47,11.4,11.4,0,0,1,5-9.35"
        />
        <path
          id="XMLID_505_-7"
          data-name="XMLID 505 -7"
          d="M246.13,178.51a24.47,24.47,0,0,1,0-48.94c12.77,0,24.38,11.65,24.38,24.47,1.16,12.82-10.45,24.47-24.38,24.47m-123.06,0A24.47,24.47,0,1,1,147.45,154a24.57,24.57,0,0,1-24.38,24.47M184.6,48C82.43,48,0,116.75,0,203c0,46.61,24.38,88.56,63.85,116.53C67.34,321.84,68,327,68,329a11.38,11.38,0,0,1-.66,4.49C63.85,345.14,59.4,364,59.21,365s-1.16,3.5-1.16,4.66a5.49,5.49,0,0,0,5.8,5.83,7.15,7.15,0,0,0,3.49-1.17L108,351c3.49-2.33,5.81-2.33,9.29-2.33a16.33,16.33,0,0,1,5.81,1.16c18.57,5.83,39.47,8.16,60.37,8.16h10.45a133.24,133.24,0,0,1-5.81-38.45c0-78.08,75.47-141,168.35-141h10.45C354.1,105.1,277.48,48,184.6,48"
        />
      </svg>
    </>
  )
}
