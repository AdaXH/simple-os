<?php

/**
 * 文章页
 * @package custom 
 * 
 */
if (!defined('__TYPECHO_ROOT_DIR__')) exit;
$this->need('header.php');
$this->need('nav-os.php');
$this->need('basic-os.php');
// $this->need('react.php');
?>
<link rel="stylesheet" type="text/css" href="<?php $this->options->themeUrl('assets/css/articles/articles.css'); ?>" />
<link rel="stylesheet" type="text/css" href="<?php $this->options->themeUrl('assets/css/common/bar.css'); ?>" />
<link rel="stylesheet" type="text/css" href="<?php $this->options->themeUrl('assets/css/common/animation.css'); ?>" />

<div class="common-container hidden-scroll shake-anim">
	<div class="articles-container">
		<script src="<?php $this->options->themeUrl('assets/js/article/meta.js'); ?>"></script>
		<div class="metas-container">
			<?php
			$metas = queryAllMeta();
			$arr = json_encode($metas);
			echo "<script>
				renderMetas($arr);
			</script>";
			?>
			<div class="meta-effect-circle"></div>
		</div>
		<div class="articles-list">
			<?php
			$this->widget('Widget_Contents_Post_Recent', 'pageSize=10000')->to($archives);
			$defaultThumb = $this->options->miniThumb;
			$year = '-';
			$mon = '-';
			$i = '-';
			$j = '-';
			$output = '<div id="articles">';
			while ($archives->next()) :
				$year_tmp = date('Y', $archives->created);
				$mon_tmp = date('m', $archives->created);
				$y = $year;
				$m = $mon;
				$summary = mb_strimwidth($archives->excerpt, 0, 200, '...');
				$title = mb_strimwidth($archives->title, 0, 30, '...');
				$type = $archives->category;
				$articleThumb = queryThumb($archives->cid);
				if ($articleThumb) {
					$defaultThumb = $articleThumb;
				}
				if ($mon != $mon_tmp && $mon > 0) $output .= '</div></article>';
				if ($year != $year_tmp && $year > 0) $output .= '</div>';
				if ($year != $year_tmp) {
					$year = $year_tmp;
				}
				$output .= '<article class="article-item from-right-anim" data-artilce-type="' . $type . '">
							<a href="' . $archives->permalink . '">
								<div class="artilce-item-title">
									<h5>
                               			<i class="iconfont icon-m-biaoti"></i>
									' . $title . '
									</h5>
									<span class="timeline__period">
                                		<i class="iconfont icon-shijian"></i>
									' . $year . "-" . date('n-d', $archives->created) . '</span>
								</div>
							</a>
							<div class="article-summary-box">
								<div class="article-thumb" style="background-image:url(' . $defaultThumb . ')"></div>
								<div class="article-item-summary">
									' . $summary . '
									<div>' . $type . '</div>
								</div>	
							</div>
						</article>';
			endwhile;
			$output .= '</div></div>';
			echo $output;
			?>
		</div>
	</div>