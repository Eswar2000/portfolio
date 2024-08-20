import './awardlist.scss';

export default function Awardlist({title, active, setSelected}) {
  return (
    <li className={active ? "active" : ""} onClick={() => {setSelected(title)}}>
      {title}
    </li>
  )
}
