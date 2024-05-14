import { history } from '@umijs/max';
import { Button, Flex, Table } from 'antd';

const Analysis = () => {
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];

  const columns = [
    {
      title: '项目名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '文件名称',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '更新时间',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '',
      key: 'action',
    },
  ];
  return (
    <>
      <div className="flex p-1 flex-col">
        <Flex
          justify="space-between"
          align="center"
          className="mb-3 py-1 border-b-2 border-b-[#eee]"
        >
          <span className="text-[20px]">分析项目</span>
          <Button onClick={() => history.push('/analysis/operation/1111')}>
            新建分析
          </Button>
        </Flex>
        <Table columns={columns} dataSource={dataSource} pagination={false} />
      </div>
    </>
  );
};

export default Analysis;
