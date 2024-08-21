import './awardlist.scss';

export default function Awardlist({title, active, setSelected, id}) {
  return (
    <li key={title} className={active ? "merit-item active" : "merit-item"} onClick={() => {setSelected(title)}}>
      {title}
    </li>
  )
}
