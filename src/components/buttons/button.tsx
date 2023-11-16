import style from './button.module.css'
import {
  ArrowSmLeft,
  ArrowSmRight,
  ArrowLgLeft,
  ArrowLgRight,
} from "./heroicon"

interface ChildrenButtonProps{
  children: React.ReactNode
  left: boolean
  right: boolean
}

export const ButtonSimpleFill = ({children, left, right}: ChildrenButtonProps) => {
  const classStyled = `${style["fill"]} ${style.button}`

  return (
    <button type='button' className={classStyled}>
      {left ? <ArrowLgLeft color={'#ffffff'} /> : null}
      {children}
      {right ? <ArrowLgRight color={'#ffffff'} /> : null}
    </button>
  )
}

export const ButtonSimpleOutline = ({children, left, right}: ChildrenButtonProps) => {
  const classStyled = `${style["outline"]} ${style.button}`

  return (
    <button type='button' className={classStyled}>
      {left ? <ArrowLgLeft color={'#121417'} /> : null}
      {children}
      {right ? <ArrowLgRight color={'#121417'} /> : null}
    </button>
  )
}

export const ButtonHeroiconFill = ({children, left, right}: ChildrenButtonProps) => {
  const classStyled = `${style["fill"]} ${style.button}`

  return (
    <button type='button' className={classStyled}>
      {left ? <ArrowSmLeft color={'#ffffff'} /> : null}
      {children}
      {right ? <ArrowSmRight color={'#ffffff'} /> : null}
    </button>
  )
}

export const ButtonHeroiconOutline = ({children, left, right}: ChildrenButtonProps) => {
  const classStyled = `${style["outline"]} ${style.button}`

  return (
    <button type='button' className={classStyled}>
      {left ? <ArrowSmLeft color={'#121417'} /> : null}
      {children}
      {right ? <ArrowSmRight color={'#121417'} /> : null}
    </button>
  )
}

export const ButtonFuentFill = ({children}: {
  children: React.ReactNode
}) => {
  const classStyled = `${style["fill"]} ${style.button}`

  return (
    <button type='button' className={classStyled}>
      {children}
    </button>
  )
}

export const ButtonFuentOutline = ({children}: {
  children: React.ReactNode
}) => {
  const classStyled = `${style["outline"]} ${style.button}`

  return (
    <button type='button' className={classStyled}>
      {children}
    </button>
  )
}
