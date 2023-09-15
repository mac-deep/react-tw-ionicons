import React, { SVGProps } from 'react'

type GitCommitProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function GitCommit({ extraStyles, ...rest }: GitCommitProps) {
  const defaultProps: GitCommitProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: GitCommitProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M448,224H380a128,128,0,0,0-247.9,0H64a32,32,0,0,0,0,64h68.05A128,128,0,0,0,380,288H448a32,32,0,0,0,0-64ZM256,320a64,64,0,1,1,64-64A64.07,64.07,0,0,1,256,320Z" />
      </svg>
    </>
  )
}
