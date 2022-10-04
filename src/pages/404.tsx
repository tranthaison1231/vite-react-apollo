import { Button, Result, Typography } from 'antd';
import { Link } from 'react-router-dom';
import useTypeSafeTranslation from '#/shared/hooks/useTypeSafeTranslation';

function NotFoundPage() {
  const { t } = useTypeSafeTranslation();

  return (
    <Result
      status="404"
      title={<Typography.Title level={1}>404</Typography.Title>}
      subTitle={t('empty.page')}
      extra={
        <Link to="/">
          <Button type="primary">{t('button.backHome')}</Button>
        </Link>
      }
    />
  );
}

export default NotFoundPage;
