export default function CategorySelector() {
  const categories = [
    'World',
    'Techno',
    'Politics',
    'Cars',
    'Business',
    'Sports',
    'Arts',
    'Books',
    'Food',
    'Travel',
  ]

  return (
    <ul className="flex h-16 w-full items-center justify-between">
      {categories.map((category, index) => (
        <li
          key={index}
          className="text-muted-foreground cursor-pointer font-semibold hover:text-black"
        >
          {category}
        </li>
      ))}
    </ul>
  )
}
