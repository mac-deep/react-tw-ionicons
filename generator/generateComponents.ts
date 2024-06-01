const fs = require('fs')
const path = require('path')
const { parse } = require('svg-parser')

const kebabToPascal = (input: string): string => {
  return input
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

const kebabToCamel = (input: string): string => {
  return input.replace(/-([a-z])/g, (_, match) => match.toUpperCase())
}

const componentTemplate = (iconName: string, iconSvg: string) => `
import { SVGProps, SVGAttributes }  from 'react'

type ${iconName}Props = {
  extraStyles?: SVGAttributes<SVGElement>['style'];
  extraClasses?: SVGAttributes<SVGElement>['className'];
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function ${iconName}({
  extraStyles,
  extraClasses,
  ...rest
}: ${iconName}Props) {

  const defaultProps: ${iconName}Props = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: ${iconName}Props = { ...defaultProps, ...rest }
  
  return (
    <>
      ${iconSvg}
    </>
  );
}
`

const readSvgFiles = async () => {
  try {
    const directoryPath = './src/svg'
    const files = fs.readdirSync(directoryPath)
    const components = []

    for (const file of files) {
      if (file.endsWith('.svg')) {
        const fileName = path.basename(file, '.svg')
        const componentName = kebabToPascal(fileName)

        let svg = String(fs.readFileSync(path.join(directoryPath, file), 'utf-8'))
        const parsedSvg = parse(svg)

        svg = svg.replace(/class/g, 'className')
        svg = svg.replace(/stroke-linejoin/g, 'strokeLinejoin')
        svg = svg.replace(/stroke-width/g, 'strokeWidth')
        svg = svg.replace(/stroke-miterlimit/g, 'strokeMiterlimit')
        svg = svg.replace(/stroke-linecap/g, 'strokeLinecap')
        svg = svg.replace(/fill-rule/g, 'fillRule')
        svg = svg.replace(/stroke:#000/g, 'stroke:currentColor')
        svg = svg.replace(/stroke="#000"/g, 'stroke = "currentColor"')
        svg = svg.replace(/<svg[^>]*>/, (match) => {
          // Use a callback function to replace the opening <svg> tag
          return match.replace(/(width|height)="[^"]*"/g, '')
        })
        svg = svg.replace('className="ionicon"', '')

        svg = svg.replace(/<\?xml[\s\S]*?\?>/g, (match) => `{/* ${match} */}`)
        svg = svg.replace(/<!--[\s\S]*?-->/g, (match) => `{/* ${match} */}`)

        svg = svg.replace(/style="([^"]*)"/g, (_, styleValue) => {
          // Split the style value into individual property-value pairs
          const pairs = styleValue
            .split(';')
            .filter((pair: string) => pair.trim() !== '' && !pair.includes('enable-background')) // Remove empty pairs
            .map((pair: any) => {
              const [property, value] = pair.split(':')
              const formattedProperty = kebabToCamel(property.trim())
              const formattedValue = value.trim()
              return `${formattedProperty}: '${formattedValue}'`
            })

          // Join the pairs into a string and format as a JSX object
          const jsxStyle = `{${pairs.join(', ')}}`
          return `style={${jsxStyle}}`
        })

        svg = svg.replace(/<svg([^>]*)style={{([^}]*)}}/g, (_, attributes, existingStyle) => {
          // Append "{...extraStyles}" to the existing style attribute
          return `<svg ${attributes} style={{${existingStyle && existingStyle + ','} ...extraStyles}}`
        })

        svg = svg.replace(/<svg([^>]*)>/g, (match, attributes) => {
          return `<svg ${attributes} {...mergedProps}>`
        })

        svg = svg.replace('<svg', '<svg className={`[&>*]:stroke-current fill-current  ${extraClasses}`}')

        svg = svg.replace(/xmlns:xlink=["'][^"']*["']/g, '')
        svg = svg.replace(/xml:space=["'][^"']*["']/g, '')

        // svg = svg.replace(/<title>.*<\/title>/, "{props.title ? <title>{props.title}</title> : ''}")
        const component = componentTemplate(componentName, String(svg))
        fs.writeFile('./src/components/' + componentName + '.tsx', component, (err: any) => console.log(err))
        components.push(componentName)
      }
    }

    let exportFile = 'import "./tailwind/theme.css";\n'
    exportFile = exportFile.concat(
      components.map((c) => `export { default as ${c} } from './components/${c}'`).join('\n'),
    )
    fs.writeFile('./src/index.ts', exportFile, (err: any) => console.log(err))

    console.log('Total ' + components.length + ' files generated ✨')
  } catch (err) {
    console.error(err)
  }
}

readSvgFiles()
