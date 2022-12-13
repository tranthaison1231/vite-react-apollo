import { Button, Result, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <Result
      extra={
        <Link to="/">
          <Button type="primary">{t('button.backHome')}</Button>
        </Link>
      }
      status="404"
      subTitle={t('empty.page')}
      title={<Typography.Title level={1}>404</Typography.Title>}
    />
  );
}

export default NotFoundPage;
