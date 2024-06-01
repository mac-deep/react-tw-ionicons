import { SVGProps, SVGAttributes } from 'react'

type QrCodeProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function QrCode({ extraStyles, extraClasses, ...rest }: QrCodeProps) {
  const defaultProps: QrCodeProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: QrCodeProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <rect x="336" y="336" width="80" height="80" rx="8" ry="8" />
        <rect x="272" y="272" width="64" height="64" rx="8" ry="8" />
        <rect x="416" y="416" width="64" height="64" rx="8" ry="8" />
        <rect x="432" y="272" width="48" height="48" rx="8" ry="8" />
        <rect x="272" y="432" width="48" height="48" rx="8" ry="8" />
        <path d="M448,32H304a32,32,0,0,0-32,32V208a32,32,0,0,0,32,32H448a32,32,0,0,0,32-32V64A32,32,0,0,0,448,32ZM416,168a8,8,0,0,1-8,8H344a8,8,0,0,1-8-8V104a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8Z" />
        <path d="M208,32H64A32,32,0,0,0,32,64V208a32,32,0,0,0,32,32H208a32,32,0,0,0,32-32V64A32,32,0,0,0,208,32ZM176,168a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V104a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8Z" />
        <path d="M208,272H64a32,32,0,0,0-32,32V448a32,32,0,0,0,32,32H208a32,32,0,0,0,32-32V304A32,32,0,0,0,208,272ZM176,408a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V344a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8Z" />
      </svg>
    </>
  )
}
