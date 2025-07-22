## day1 组件为何重复渲染

```ts
const Parent = () => {
  const [count, setCount] = useState(0);

  return (
    <Child onClick={() => setCount(count + 1)} />
  );
};

const Child = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log('Child render');
  return <button onClick={onClick}>Click</button>;
});
```

每次渲染创建了新的函数对象

```ts
<Child onClick={() => setCount(count + 1)} />
```

使用 `useCallback` 缓存

```ts
const handleClick = useCallback(() => setCount(c => c + 1), []);
<Child onClick={handleClick} />
```

