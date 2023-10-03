import { useFocus } from '../../customhooks';
import { Button } from '../../components';

const UseFocusExample = () => {
  const [isFocused, attrs] = useFocus();
  const { onFocus, onBlur } = attrs;

  return (
    <div style={{ position: 'relative' }}>
      <Button {...(attrs as React.HTMLAttributes<HTMLButtonElement>)}>Button</Button>
      {isFocused && (
        <div
          style={{
            background: 'red',
            display: 'flex',
            position: 'absolute',
            top: '60px',
            zIndex: '10',
            cursor: 'pointer',
          }}>
          <ul>
            <li onClick={onBlur}>Menu Item 1</li>
            <li onClick={onBlur}>Menu Item 2</li>
            <li onClick={onBlur}>Menu Item 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UseFocusExample;
