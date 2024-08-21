import './awardlist.scss';

export default function Awardlist({title, active, setSelected}) {
  return (
    <li className={active ? "merit-item active" : "merit-item"} onClick={() => {setSelected(title)}}>
      {title}
    </li>
  )
}
