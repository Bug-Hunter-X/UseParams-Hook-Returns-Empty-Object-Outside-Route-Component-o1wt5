The solution is to ensure the `useParams()` hook is always used within a component that is a direct child of a `<Route>` component. This ensures the routing context is available.

```javascript
// Correct Usage
function MyComponent() {
  const params = useParams(); // params will contain id correctly
  return <div>ID: {params.id}</div>;
}

function MyRoute() {
  return (
    <Routes>
      <Route path="/:id" element={<MyComponent/>}/>
    </Routes>
  );
}
```
Alternatively, pass the parameters as props or use a context API to make them available to components outside the direct route hierarchy.