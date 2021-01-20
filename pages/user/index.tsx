import { useState } from 'react';
import { List, Avatar, Divider, Button } from 'antd';
// import style from '@styles/userPage.module.scss';

const mockData = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

const UserInfoPage: React.FC = () => {
  const [list, setList] = useState(mockData);
  const onLoadMore = () => {
    setList(list.concat(...mockData));
    console.log(list.length);
  };
  const loadMore = (
    <div
      style={{
        textAlign: 'center',
        marginTop: 12,
        height: 32,
        lineHeight: '32px',
      }}
    >
      <Button onClick={onLoadMore}>loading more</Button>
    </div>
  );

  return (
    <>
      <Divider orientation="left">유저 리스트</Divider>
      <List
        itemLayout="horizontal"
        size="large"
        dataSource={list}
        loadMore={loadMore}
        renderItem={(item) => (
          <List.Item actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<a href="https://ant.design">{item.title}</a>}
              description="유저 데이터 ............"
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default UserInfoPage;
