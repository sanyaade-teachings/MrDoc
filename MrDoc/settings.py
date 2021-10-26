# coding:utf-8
"""
Django settings for MrDoc project.

Generated by 'django-admin startproject' using Django 2.1.3.

For more information on this file, see
https://docs.djangoproject.com/en/2.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/2.1/ref/settings/
"""

import os
from configparser import ConfigParser,RawConfigParser
from loguru import logger

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# 配置文件和数据文件目录
CONFIG_DIR = os.path.join(BASE_DIR, 'config')
CONFIG = ConfigParser()
CONFIG.read(os.path.join(CONFIG_DIR,'config.ini'),encoding='utf-8')

# 日志文件配置
LOG_DIR = os.path.join(BASE_DIR,'log')

if os.path.exists(LOG_DIR) is False:
    os.makedirs(LOG_DIR)

logger.add(os.path.join(LOG_DIR,'error.log'),rotation='1 days',retention='30 days',encoding='utf-8')

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '5&71mt9@^58zdg*_!t(x6g14q*@84d%ptr%%s6e0l50zs0we3d'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = CONFIG.getboolean('site','debug',fallback=False)

VERSIONS = '0.7.1'

ALLOWED_HOSTS = ['*']

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'haystack', # 全文搜索
    'app_admin', # 管理APP
    'app_doc', # 文档APP
    'app_api', # API APP
    'django.contrib.sitemaps', # 站点地图
    'rest_framework',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.locale.LocaleMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'app_admin.middleware.require_login_middleware.RequiredLoginMiddleware',
]

ROOT_URLCONF = 'MrDoc.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            os.path.join(BASE_DIR,'template')
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.i18n',
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'app_admin.context_processors.sys_setting', # 自定义系统设置上下文渲染
            ],
            'libraries': { # 自定义的模板标签
                'doc_filter' : 'app_doc.templatetags.doc_filter',
                'project_filter' : 'app_doc.templatetags.project_filter',
            },
        },
    },
]

WSGI_APPLICATION = 'MrDoc.wsgi.application'


# Database
# 数据库配置
# https://docs.djangoproject.com/en/2.2/ref/settings/#databases

DATABASE_MAP = {
    'sqlite':'django.db.backends.sqlite3',
    'mysql':'django.db.backends.mysql',
    'postgresql':'django.db.backends.postgresql_psycopg2',
    'oracle':'django.db.backends.oracle',
}

db_engine = CONFIG.get('database','engine',fallback='sqlite')
if db_engine == 'sqlite':
    DATABASES = {
        'default': {
            'ENGINE': DATABASE_MAP[db_engine],
            'NAME': os.path.join(CONFIG_DIR, 'db.sqlite3'),
            'OPTIONS':{
                'timeout':20,
            }
        }
    }
else:
    DATABASES = {
        'default': {
            'ENGINE': DATABASE_MAP[CONFIG['database']['engine']],
            'NAME': CONFIG['database']['name'],
            'USER': CONFIG['database']['user'],
            'PASSWORD': CONFIG['database']['password'],
            'HOST': CONFIG['database']['host'],
            'PORT': CONFIG['database']['port'],
        }
    }


# Password validation
# https://docs.djangoproject.com/en/2.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]
LOGIN_URL = 'login'

# Internationalization
# https://docs.djangoproject.com/en/2.1/topics/i18n/

LANGUAGE_CODE = CONFIG.get('locale','language',fallback='zh-hans')

TIME_ZONE = CONFIG.get('local','timezone', fallback='Asia/Shanghai')

USE_I18N = True

USE_L10N = True

USE_TZ = False

# 多语言配置
LANGUAGES = (
    ('zh-hans',('中文简体')),
    ('zh-hant',('中文繁體')),
    ('en',('english')),
)
# 翻译文件
LOCALE_PATHS = (
    os.path.join(BASE_DIR,'locale'),
)


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.1/howto/static-files/

STATIC_URL = '/static/'
if DEBUG:
    STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static'), ]
else:
    STATIC_ROOT = os.path.join(BASE_DIR,'static')

# 媒体文件
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR,'media')
if os.path.exists(MEDIA_ROOT) is False:
    os.mkdir(MEDIA_ROOT)

# 允许上传的图片后缀
ALLOWED_IMG = CONFIG.get("image_upload","suffix_name",fallback="jpg,jpeg,gif,png,bmp,webp").split(",")


REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 10
}

# 全文检索配置
HAYSTACK_CONNECTIONS = {
    'default': {
        # 使用whoosh引擎
        'ENGINE': 'app_doc.search.whoosh_cn_backend.WhooshEngine',
        # 索引文件路径
        'PATH': os.path.join(BASE_DIR, 'whoosh_index'),
    }
}

# 当添加、修改、删除数据时，自动生成索引
HAYSTACK_SIGNAL_PROCESSOR = 'haystack.signals.RealtimeSignalProcessor'
# 自定义高亮
HAYSTACK_CUSTOM_HIGHLIGHTER = "app_doc.search.highlight.MyHighLighter"

# Selenium 调用的driver类型 默认为Chromium
CHROMIUM_DRIVER = CONFIG.get('selenium','driver',fallback='CHROMIUM')
CHROMIUM_DRIVER_PATH = CONFIG.get('selenium','driver_path',fallback=None)

INTERNAL_IPS = ('127.0.0.1', '::1')
# Django Debug Toolbar 工具，站点开启调试的时候启用
try:
    import debug_toolbar.settings  # noqa
    if DEBUG:
        INSTALLED_APPS.append('debug_toolbar.apps.DebugToolbarConfig')
        MIDDLEWARE.insert(0, 'debug_toolbar.middleware.DebugToolbarMiddleware')
        DEBUG_TOOLBAR_PATCH_SETTINGS = False
        DEBUG_TOOLBAR_CONFIG = {
            'JQUERY_URL': '',
            'DISABLE_PANELS': debug_toolbar.settings.PANELS_DEFAULTS,
        }

    pass
except ImportError:
    pass