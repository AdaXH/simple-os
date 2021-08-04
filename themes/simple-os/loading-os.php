<link rel="stylesheet" type="text/css" href="<?php $this->options->themeUrl('assets/css/loading/loading.css'); ?>" />
<div class="loading-container">
    <div class="loading-top">
        <h3><?php $this->options->loadingTitle() ?></h3>
        <div class="loading-tips">
            <?php $this->options->loadingSubTitle() ?>
        </div>
        <h4 class="loading-tips-unlock">
            <?php $this->options->unlockTip() ?>
        </h4>
    </div>
    <div class="loading-bottom">
        <div class="unlock-box">
            <div class="unlock-btn">
                <div class="btn"></div>
                <div class="btn-inner"></div>
                <div class="unlock-direction"></div>
            </div>
            <div class="loading-dot">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
</div>
<script src="<?php $this->options->themeUrl('assets/js/loading/init.js'); ?>"></script>
