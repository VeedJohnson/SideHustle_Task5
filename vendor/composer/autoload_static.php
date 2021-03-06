<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitea468622de0f7cbb8f91f8f6101140ff
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitea468622de0f7cbb8f91f8f6101140ff::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitea468622de0f7cbb8f91f8f6101140ff::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitea468622de0f7cbb8f91f8f6101140ff::$classMap;

        }, null, ClassLoader::class);
    }
}
