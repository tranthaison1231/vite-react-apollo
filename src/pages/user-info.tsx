import { PageContainer } from '@ant-design/pro-layout';
import { Card } from 'antd';
import { useTranslation } from 'react-i18next';

function UserInfo() {
  const { t } = useTranslation();
  return (
    <PageContainer
      header={{
        title: t('header.profile'),
      }}
    >
      <Card>Hello</Card>
    </PageContainer>
  );
}

export default UserInfo;
