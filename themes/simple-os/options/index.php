<style>

</style>

<?php

/**
 * Setting
 * 
 * @author Ada
 * @link https://adaxh.site
 * @version 1.0
 */

if (!defined('__TYPECHO_ROOT_DIR__')) exit;

function themeConfig($form)
{


    /* 数据备份 */
    $str1 = explode('/themes/', Helper::options()->themeUrl);
    $str2 = explode('/', $str1[1]);
    $name = $str2[0];
    $db = Typecho_Db::get();
    $sjdq = $db->fetchRow($db->select()->from('table.options')->where('name = ?', 'theme:' . $name));
    $ysj = $sjdq['value'];
    if (isset($_POST['type'])) {
        if ($_POST["type"] == "备份模板设置数据") {
            if ($db->fetchRow($db->select()->from('table.options')->where('name = ?', 'theme:' . $name . 'bf'))) {
                $update = $db->update('table.options')->rows(array('value' => $ysj))->where('name = ?', 'theme:' . $name . 'bf');
                $updateRows = $db->query($update);
                echo '<div class="tongzhi col-mb-12 home">备份已更新，请等待自动刷新！如果等不到请点击';
?>
                <a href="<?php Helper::options()->adminUrl('options-theme.php'); ?>">这里</a></div>
                <script language="JavaScript">
                    window.setTimeout("location=\'<?php Helper::options()->adminUrl('options-theme.php'); ?>\'", 2500);
                </script>
                <?php
            } else {
                if ($ysj) {
                    $insert = $db->insert('table.options')
                        ->rows(array('name' => 'theme:' . $name . 'bf', 'user' => '0', 'value' => $ysj));
                    $insertId = $db->query($insert);
                    echo '<div class="tongzhi col-mb-12 home">备份完成，请等待自动刷新！如果等不到请点击';
                ?>
                    <a href="<?php Helper::options()->adminUrl('options-theme.php'); ?>">这里</a></div>
                    <script language="JavaScript">
                        window.setTimeout("location=\'<?php Helper::options()->adminUrl('options-theme.php'); ?>\'", 2500);
                    </script>
                <?php
                }
            }
        }
        if ($_POST["type"] == "还原模板设置数据") {
            if ($db->fetchRow($db->select()->from('table.options')->where('name = ?', 'theme:' . $name . 'bf'))) {
                $sjdub = $db->fetchRow($db->select()->from('table.options')->where('name = ?', 'theme:' . $name . 'bf'));
                $bsj = $sjdub['value'];
                $update = $db->update('table.options')->rows(array('value' => $bsj))->where('name = ?', 'theme:' . $name);
                $updateRows = $db->query($update);
                echo '<div class="tongzhi col-mb-12 home">检测到模板备份数据，恢复完成，请等待自动刷新！如果等不到请点击';
                ?>
                <a href="<?php Helper::options()->adminUrl('options-theme.php'); ?>">这里</a></div>
                <script language="JavaScript">
                    window.setTimeout("location=\'<?php Helper::options()->adminUrl('options-theme.php'); ?>\'", 2000);
                </script>
            <?php
            } else {
                echo '<div class="tongzhi col-mb-12 home">没有模板备份数据，恢复不了哦！</div>';
            }
        }
        if ($_POST["type"] == "删除备份数据") {
            if ($db->fetchRow($db->select()->from('table.options')->where('name = ?', 'theme:' . $name . 'bf'))) {
                $delete = $db->delete('table.options')->where('name = ?', 'theme:' . $name . 'bf');
                $deletedRows = $db->query($delete);
                echo '<div class="tongzhi col-mb-12 home">删除成功，请等待自动刷新，如果等不到请点击';
            ?>
                <a href="<?php Helper::options()->adminUrl('options-theme.php'); ?>">这里</a></div>
                <script language="JavaScript">
                    window.setTimeout("location=\'<?php Helper::options()->adminUrl('options-theme.php'); ?>\'", 2500);
                </script>
<?php
            } else {
                echo '<div class="tongzhi col-mb-12 home">不用删了！备份不存在！！！</div>';
            }
        }
    }
    echo '<form class="protected home " action="?' . $name . 'bf" method="post" style="margin-bottom: 1rem;">
<input type="submit" name="type" class="btn btn-s" value="备份模板设置数据" />&nbsp;&nbsp;<input type="submit" name="type" class="btn btn-s" value="还原模板设置数据" />&nbsp;&nbsp;<input type="submit" name="type" class="btn btn-s" value="删除备份数据" /></form>';



    echo '<link href="' . Helper::options()->themeUrl . '/assets/styles/options.css" rel="stylesheet" type="text/css" />';
    echo <<<EOF
<div class="options-contain">
<div class="options-notice"> 
<h1 class="theme-plane">Simple-os</h1>
    <p>github：<a href="https://github.com/iRoZhi/Typecho-vCards-theme">Github</a></p>
    <p>作者：<a href="https://adaxh.site">Ada</a></p>
    <p>欢迎加入博友群：<a href="https://jq.qq.com/?_wv=1027&k=xK9A9ZGL">345494089</a></p>

</div>
EOF;
    echo '<script src="' . Helper::options()->themeUrl . '/assets/styles/options.js"></script>';

    $blogTitle = new Typecho_Widget_Helper_Form_Element_Text('blogTitle', NULL, "Simple - OS", _t('<h3>1.全局通用配置：</h3>博客标题：'));
    $blogTitle->setAttribute('class', 'options-content options-home');
    $form->addInput($blogTitle);
    $desc = new Typecho_Widget_Helper_Form_Element_Text('desc', NULL, "个人介绍", _t('个人简介：'));
    $desc->setAttribute('class', 'options-content options-home');
    $form->addInput($desc);
    $bg = new Typecho_Widget_Helper_Form_Element_Text('bg', NULL, "", _t('背景图：'));
    $bg->setAttribute('class', 'options-content options-home');
    $form->addInput($bg);
    $bgOpacity = new Typecho_Widget_Helper_Form_Element_Text('bgOpacity', NULL, "0.6", _t('背景透明度(0-1)：'));
    $bgOpacity->setAttribute('class', 'options-content options-home');
    $form->addInput($bgOpacity);
    $effectLine = new Typecho_Widget_Helper_Form_Element_Radio('effectLine', array(
        20 => _t('20'),
        35 => _t('35'),
        55 => _t('35'),
        0 => _t('关闭'),
    ), "20", _t('粒子个数：'));
    $effectLine->setAttribute('class', 'options-content options-home');
    $form->addInput($effectLine);


    $loadingTitle = new Typecho_Widget_Helper_Form_Element_Text('loadingTitle', NULL, "Welcome", _t('<h3>2.loading页配置：</h3>loading页主标题：'));
    $loadingTitle->setAttribute('class', 'options-content options-home');
    $form->addInput($loadingTitle);
    $loadingSubTitle = new Typecho_Widget_Helper_Form_Element_Textarea('loadingSubTitle', NULL, "Maybe you can't save the world , but you can change the world.", _t('loading页副标题：'));
    $loadingSubTitle->setAttribute('class', 'options-content options-home');
    $form->addInput($loadingSubTitle);
    $unlockTip = new Typecho_Widget_Helper_Form_Element_Text('unlockTip', NULL, "滑动以解锁", _t('解锁提示：'));
    $unlockTip->setAttribute('class', 'options-content options-home');
    $form->addInput($unlockTip);

    $qq = new Typecho_Widget_Helper_Form_Element_Text('qq', NULL, "", _t('<h3>3.首页个人信息配置：</h3>QQ：'));
    $qq->setAttribute('class', 'options-content options-home');
    $form->addInput($qq);
    $email = new Typecho_Widget_Helper_Form_Element_Text('email', NULL, "", _t('邮箱：'));
    $email->setAttribute('class', 'options-content options-home');
    $form->addInput($email);
    $github = new Typecho_Widget_Helper_Form_Element_Text('github', NULL, "", _t('Github：'));
    $github->setAttribute('class', 'options-content options-home');
    $form->addInput($github);
    $avatar = new Typecho_Widget_Helper_Form_Element_Text('avatar', NULL, "", _t('头像url：'));
    $avatar->setAttribute('class', 'options-content options-home');
    $form->addInput($avatar);
    $userName = new Typecho_Widget_Helper_Form_Element_Text('userName', NULL, "", _t('用户名：'));
    $userName->setAttribute('class', 'options-content options-home user-name-placeholder');
    $form->addInput($userName);

    $hitokoto = new Typecho_Widget_Helper_Form_Element_Radio('hitokoto', array(
        "true" => _t('启用'),
        "false" => _t('关闭(将显示个人简介)')
    ), "true", _t('是否启用一言：'));
    $hitokoto->setAttribute('class', 'options-content options-home');
    $form->addInput($hitokoto);

    $miniThumb = new Typecho_Widget_Helper_Form_Element_Text('miniThumb', NULL, "miniThumb", _t('<h3>4.文章配置：</h3>默认缩略图：'));
    $miniThumb->setAttribute('class', 'options-content options-home');
    $form->addInput($miniThumb);

    // $headStatus = new Typecho_Widget_Helper_Form_Element_Text('headStatus', NULL, "愿世界安康，愿你我皆好！", _t('首页头部一句话介绍'));
    // $headStatus->setAttribute('class', 'options-content options-home');
    // $form->addInput($headStatus);
    // $hdAboutUrl = new Typecho_Widget_Helper_Form_Element_Text('hdAboutUrl', NULL, "About.html", _t('头像跳转地址'), _t('请输入需要跳转页面的缩略名'));
    // $hdAboutUrl->setAttribute('class', 'options-content options-home');
    // $form->addInput($hdAboutUrl);
    // $logoUrl = new Typecho_Widget_Helper_Form_Element_Text('logoUrl', NULL, "https://q1.qlogo.cn/g?b=qq&nk=80360650&s=640", _t('首页头部头像地址'), _t('在这里填入一个图片 URL 地址, 以在头部设置你的头像'));
    // $logoUrl->setAttribute('class', 'options-content options-home');
    // $form->addInput($logoUrl);
    // $headbgImgUrl = new Typecho_Widget_Helper_Form_Element_Text('headbgImgUrl', NULL, "https://cdn.jsdelivr.net/gh/irozhi/irils-imgs/usr/uploads/2021/07/3884723125.jpg", _t('首页头部背景图片地址'), _t('在这里填入一个图片 URL 地址, 在首页显示头部背景'));
    // $headbgImgUrl->setAttribute('class', 'options-content options-home');
    // $form->addInput($headbgImgUrl);

    // $BooksUrl = new Typecho_Widget_Helper_Form_Element_Text('BooksUrl', NULL, "Books.html", _t('<h2>注意：一个留空则全不显示</h2>书单地址'), _t('请输入你的书单地址'));
    // $BooksUrl->setAttribute('class', 'options-content options-more');
    // $form->addInput($BooksUrl);
    // $FilmsUrl = new Typecho_Widget_Helper_Form_Element_Text('FilmsUrl', NULL, "Films.html", _t('影单地址'), _t('请输入你的书单地址'));
    // $FilmsUrl->setAttribute('class', 'options-content options-more');
    // $form->addInput($FilmsUrl);
    // $MusicUrl = new Typecho_Widget_Helper_Form_Element_Text('MusicUrl', NULL, "Music.html", _t('歌单地址'), _t('请输入你的书单地址'));
    // $MusicUrl->setAttribute('class', 'options-content options-more');
    // $form->addInput($MusicUrl);
    // $PhotosUrl = new Typecho_Widget_Helper_Form_Element_Text('PhotosUrl', NULL, "Photos.html", _t('相册地址'), _t('请输入你的书单地址'));
    // $PhotosUrl->setAttribute('class', 'options-content options-more');
    // $form->addInput($PhotosUrl);
    // $WorksUrl = new Typecho_Widget_Helper_Form_Element_Text('WorksUrl', NULL, "Works.html", _t('项目地址'), _t('请输入你的书单地址'));
    // $WorksUrl->setAttribute('class', 'options-content options-more');
    // $form->addInput($WorksUrl);
    // $SayUrl = new Typecho_Widget_Helper_Form_Element_Text('SayUrl', NULL, "Say.html", _t('语录地址'), _t('请输入你的书单地址'));
    // $SayUrl->setAttribute('class', 'options-content options-more');
    // $form->addInput($SayUrl);
    // $LogsUrl = new Typecho_Widget_Helper_Form_Element_Text('LogsUrl', NULL, "Logs.html", _t('日志地址'), _t('请输入你的书单地址'));
    // $LogsUrl->setAttribute('class', 'options-content options-more');
    // $form->addInput($LogsUrl);
    // $LinksUrl = new Typecho_Widget_Helper_Form_Element_Text('LinksUrl', NULL, "Links.html", _t('友链地址'), _t('请输入你的书单地址'));
    // $LinksUrl->setAttribute('class', 'options-content options-more');
    // $form->addInput($LinksUrl);
    // $AboutUrl = new Typecho_Widget_Helper_Form_Element_Text('AboutUrl', NULL, "About.html", _t('关于地址'), _t('请输入你的书单地址'));
    // $AboutUrl->setAttribute('class', 'options-content options-more');
    // $form->addInput($AboutUrl);

    // $more_page = new Typecho_Widget_Helper_Form_Element_Checkbox(
    //     'more_page',
    //     array(
    //         'Books' => _t('显示书单'),
    //         'Films' => _t('显示影单'),
    //         'Music' => _t('显示歌单'),
    //         'Photos' => _t('显示相册'),
    //         'Works' => _t('显示项目'),
    //         'Say' => _t('显示语录'),
    //         'Logs' => _t('显示日志'),
    //         'Links' => _t('显示友链'),
    //         'About' => _t('显示关于')
    //     ),
    //     array('Books', 'Films', 'Music', 'Photos', 'Works', 'Say', 'Logs', 'Links', 'About'),
    //     _t('更多页面菜单显示')
    // );
    // $more_page->setAttribute('class', 'options-content options-more');
    // $form->addInput($more_page->multiMode());

    // $hd_qq = new Typecho_Widget_Helper_Form_Element_Text('hd_qq', NULL, "http://wpa.qq.com/msgrd?v=3&uin=80360650&site=qq&menu=yes", _t('qq'), _t('请输入联系qq'));
    // $hd_qq->setAttribute('class', 'options-content options-contact');
    // $form->addInput($hd_qq);
    // $hd_email = new Typecho_Widget_Helper_Form_Element_Text('hd_email', NULL, "https://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=im@rz.sb", _t('邮箱'), _t('请输入邮箱地址'));
    // $hd_email->setAttribute('class', 'options-content options-contact');
    // $form->addInput($hd_email);
    // $hd_github = new Typecho_Widget_Helper_Form_Element_Text('hd_github', NULL, "https://github.com/iRoZhi", _t('github地址'), _t('请输入github地址'));
    // $hd_github->setAttribute('class', 'options-content options-contact');
    // $form->addInput($hd_github);
    // $hd_weibo = new Typecho_Widget_Helper_Form_Element_Text('hd_weibo', NULL, "http://weibo.com/irils", _t('微博'), _t('请输入微博地址'));
    // $hd_weibo->setAttribute('class', 'options-content options-contact');
    // $form->addInput($hd_weibo);
    // $hd_coolapk = new Typecho_Widget_Helper_Form_Element_Text('hd_coolapk', NULL, "https://www.coolapk.com/u/1112905", _t('酷安'), _t('请输入酷安地址'));
    // $hd_coolapk->setAttribute('class', 'options-content options-contact');
    // $form->addInput($hd_coolapk);
    // $hd_wx = new Typecho_Widget_Helper_Form_Element_Text('hd_wx', NULL, "https://cdn.jsdelivr.net/gh/irozhi/irils-imgs//picgo/wx-irils-s.jpg", _t('微信'), _t('请输入微信联系截图'));
    // $hd_wx->setAttribute('class', 'options-content options-contact');
    // $form->addInput($hd_wx);




    // $slimg = new Typecho_Widget_Helper_Form_Element_Select(
    //     'slimg',
    //     array(
    //         'showon' => '有图文章显示缩略图，无图文章随机显示缩略图',
    //         'Showimg' => '有图文章显示缩略图，无图文章只显示一张固定的缩略图',
    //         'showoff' => '有图文章显示缩略图，无图文章则不显示缩略图',
    //         'allsj' => '所有文章一律显示随机缩略图',
    //         'guanbi' => '关闭所有缩略图显示'
    //     ),
    //     'showon',
    //     _t('缩略图设置'),
    //     // _t('默认选择“有图文章显示缩略图，无图文章随机显示缩略图”')
    // );
    // $slimg->setAttribute('class', 'options-content options-orther');
    // $form->addInput($slimg->multiMode());
}
