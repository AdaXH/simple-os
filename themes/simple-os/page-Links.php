<?php

/**
 * 友链模板
 * @package custom 
 * 
 */
if (!defined('__TYPECHO_ROOT_DIR__')) exit;
$this->need('header.php');
$this->need('nav-os.php');
$this->need('basic-os.php');
// $this->need('react.php');
?>

<div class="col-12 col-md-12 col-lg-10 col_12" id='pjax'>
    <header class="header-post">
        <div class="header-post__image-wrap">
            <div class="header-post-news-item__con">
                <p itemprop="name headline" style="text-shadow: 0 0 5px #000; font-size: 1.5rem;margin-bottom: 3rem;">
                    <?php $this->title() ?>
                </p>
            </div>
        </div>

    </header>
    <div class="box box-content" style="border-radius:0 0 20px 20px;">
        <div class="caption-post" itemprop="articleBody">

            <div class="row links">
                <?php $this->links("SHOW_MIX"); ?>
            </div>
            <?php $this->content(); ?>
        </div>
        </article>

        <!-- <?php $this->need('comments.php'); ?> -->
    </div>