<?php if (!defined('__TYPECHO_ROOT_DIR__')) exit; ?>
<!DOCTYPE HTML>
<html class="no-js" lang="zh-CN">

<head>
	<meta charset="<?php $this->options->charset(); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="renderer" content="webkit">
	<meta name="HandheldFriendly" content="true">
	<title>
		<?php $this->archiveTitle(array(
			'category'  =>  _t('分类 %s 下的文章'),
			'search'    =>  _t('包含关键字 %s 的文章'),
			'tag'       =>  _t('标签 %s 下的文章'),
			'author'    =>  _t('%s 发布的文章')
		), '', ' - '); ?>
		<?php $this->options->title(); ?>
	</title>
	<link rel="shortcut icon" href="<?php $this->options->themeUrl('assets/img/favicon.svg'); ?>" type="image/png">
	<script>
		// rem方案
		// document.documentElement.style.fontSize =
		// document.documentElement.clientWidth / 13.66 + 'px';
		window.isMobile = /Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
		window.publicPath = '<?php echo Helper::options()->themeUrl ?>';
	</script>
	<link rel="stylesheet" type="text/css" href="https://at.alicdn.com/t/font_2706939_c8it511i99s.css">
	</link>
	<?php $this->header(); ?>
</head>