<?php if (!defined('__TYPECHO_ROOT_DIR__')) exit; ?>
<link rel="stylesheet" type="text/css" href="<?php $this->options->themeUrl('assets/css/nav/nav.css'); ?>" />
<div class="nav">
	<div class="blog-title">
		<h1><?php $this->options->blogTitle() ?></h1>
	</div>
	<nav class="nav-bar">
		<ul class="nav-list">
			<li class="nav-item">
				<a class="<?php if ($this->is('index')) : ?>active<?php endif; ?>" href="<?php $this->options->siteUrl(); ?>">
					<i class="icon-home"></i>
					首页
				</a>
			</li>
			<?php $this->widget('Widget_Contents_Page_List')->to($pages); ?>
			<?php while ($pages->next()) : ?>
				<li class="nav-item">
					<a<?php if ($this->is('page', $pages->slug)) : ?> class="active" <?php endif; ?> href="<?php $pages->permalink(); ?>" title="<?php $pages->title(); ?>"><?php $pages->title(); ?></a>
				</li>
			<?php endwhile; ?>
		</ul>
	</nav>
</div>