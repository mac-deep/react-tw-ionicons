import { SVGProps, SVGAttributes } from 'react'

type ArchiveProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function Archive({ extraStyles, extraClasses, ...rest }: ArchiveProps) {
  const defaultProps: ArchiveProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: ArchiveProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M64,164V408a56,56,0,0,0,56,56H392a56,56,0,0,0,56-56V164a4,4,0,0,0-4-4H68A4,4,0,0,0,64,164ZM331,315.63l-63.69,63.68a16,16,0,0,1-22.62,0L181,315.63c-6.09-6.09-6.65-16-.85-22.38a16,16,0,0,1,23.16-.56L240,329.37V224.45c0-8.61,6.62-16,15.23-16.43A16,16,0,0,1,272,224V329.37l36.69-36.68a16,16,0,0,1,23.16.56C337.65,299.62,337.09,309.54,331,315.63Z" />
        <rect x="32" y="48" width="448" height="80" rx="32" ry="32" />
      </svg>
    </>
  )
}
