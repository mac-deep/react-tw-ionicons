import React, { SVGProps } from 'react'

type BusinessSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function BusinessSharp({ extraStyles, ...rest }: BusinessSharpProps) {
  const defaultProps: BusinessSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: BusinessSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M320,176V16H32V496H160V400h32v96H480V176ZM112,432H80V400h32Zm0-80H80V320h32Zm0-80H80V240h32Zm0-80H80V160h32Zm0-80H80V80h32ZM240,80h32v32H240ZM192,352H160V320h32Zm0-80H160V240h32Zm0-80H160V160h32Zm0-80H160V80h32Zm80,320H240V400h32Zm0-80H240V320h32Zm0-80H240V240h32Zm0-80H240V160h32v32ZM448,464H320V432h32V400H320V352h32V320H320V272h32V240H320V208H448Z" />
        <rect x="384" y="400" width="32" height="32" />
        <rect x="384" y="320" width="32" height="32" />
        <rect x="384" y="240" width="32" height="32" />
      </svg>
    </>
  )
}
