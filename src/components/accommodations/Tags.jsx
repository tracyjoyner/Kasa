function Tags({ tags }) {
  return (
    <ul>
      {tags.map((tags, index) => (
        <li className="tag" key={index}>
          {tags}
        </li>
      ))}
    </ul>
  );
}

export default Tags;
