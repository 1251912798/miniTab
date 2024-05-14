import { Outlet } from '@umijs/max';

const ChildrenLayout = () => {
  return (
    <>
      Children!
      <Outlet />
    </>
  );
};

export default ChildrenLayout;
