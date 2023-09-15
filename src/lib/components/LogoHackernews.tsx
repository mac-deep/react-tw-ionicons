import React, { SVGProps } from 'react'

type LogoHackernewsProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function LogoHackernews({ extraStyles, ...rest }: LogoHackernewsProps) {
  const defaultProps: LogoHackernewsProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: LogoHackernewsProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M32,32V480H480V32ZM281.67,282.83v84H235v-84l-77-140H213l46.32,97.54,44.33-97.54h52.73Z" />
      </svg>
    </>
  )
}
