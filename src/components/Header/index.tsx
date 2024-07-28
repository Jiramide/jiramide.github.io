import styles from './component.module.css'

export interface HeaderProps {
  items: string[]
}

function HeaderItem({ item }: { item: string }) {
  return (
    <a
      className={styles.item}
      href={`#${item}`}
    >
      {item}
    </a>
  )
}

export default function Header({
  items
}: HeaderProps) {
  return (
    <header className={styles.header}>
      <strong className={styles.title}>
        jirami.de
      </strong>

      {items.length > 0 && (
        <p>•</p>
      )}

      <nav className={styles.nav}>
        {
          items.map((item) => <HeaderItem item={item} />)
        }
      </nav>
    </header>
  )
}
