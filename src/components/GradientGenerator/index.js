import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {GradientContainer} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    inputC1: '#8ae323',
    inputC2: '#014f7b',
    color1: '#8ae323',
    color2: '#014f76',
    direction: gradientDirectionsList[0].value,
    inputDir: gradientDirectionsList[0].value,
  }

  generateGradient = () => {
    const {inputC1, inputC2, inputDir} = this.state
    this.setState({color1: inputC1, color2: inputC2, direction: inputDir})
  }

  render() {
    const {inputC1, inputC2, color1, color2, inputDir, direction} = this.state
    return (
      <GradientContainer
        color1={color1}
        color2={color2}
        direction={direction}
        data-testid="gradientGenerator"
      >
        <h1 className="text-2xl font-bold text-white">
          Generate a CSS Color Gradient
        </h1>
        <p className="text-lg text-[#ededed]">Choose Direction</p>
        <ul className="flex items-center gap-3">
          {gradientDirectionsList.map(each => (
            <li
              key={each.directionId}
              onClick={() => {
                this.setState({inputDir: each.value})
              }}
            >
              <GradientDirectionItem
                text={each.displayText}
                active={each.value === inputDir}
              />
            </li>
          ))}
        </ul>
        <p className="text-lg text-[#ededed]">Pick the Colors</p>
        <div className="flex gap-10 text-center text-white">
          <div>
            <p>{inputC1}</p>
            <input
              type="color"
              value={inputC1}
              className="w-[120px] h-14 bg-transparent"
              onChange={e => {
                this.setState({inputC1: e.target.value})
              }}
            />
          </div>
          <div>
            <p>{inputC2}</p>
            <input
              type="color"
              value={inputC2}
              className="w-[120px] h-14 bg-transparent"
              onChange={e => {
                this.setState({inputC2: e.target.value})
              }}
            />
          </div>
        </div>
        <button
          className="px-3 py-1 bg-[#00c9b7] text-[#1e293b] text-lg font-bold bounded-md"
          type="button"
          onClick={this.generateGradient}
        >
          Generate
        </button>
      </GradientContainer>
    )
  }
}

export default GradientGenerator
