<?php if (!defined('__TYPECHO_ROOT_DIR__')) echo 'error'; ?>

<?php echo $this->archiveTitle(array(
    'category'  =>  _t('分类【 %s 】下的文章'),
    'search'    =>  _t('包含关键字【 %s 】的文章'),
    'tag'       =>  _t('标签【 %s 】下的文章'),
    'author'    =>  _t('【%s 】发布的文章')
), '', ''); ?>