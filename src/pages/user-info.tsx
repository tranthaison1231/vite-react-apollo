import { PageContainer } from '@ant-design/pro-layout';
import { Card } from 'antd';
import useTypeSafeTranslation from '#/shared/hooks/useTypeSafeTranslation';

function UserInfo() {
  const { t } = useTypeSafeTranslation();
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
