from django.conf import settings
from django.conf.urls import patterns, include, url
from django.conf.urls.static import static
from django.contrib import admin

from nar_ui.views import *


admin.autodiscover()


urlpatterns = patterns('',
    url(r'^$', HomePageView.as_view()),
    url(r'^sites$', SiteView.as_view()),
    url(r'^about$', AboutView.as_view()),
    url(r'^mississippi$', MississippiView.as_view()),
    url(r'^coastal$', CoastalView.as_view()),
    url(r'^site/(?P<site_id>\d*)/summary-report$', SiteSummaryReportView.as_view()),
    url(r'^site/(?P<site_id>\d*)/full-report$', SiteFullReportView.as_view()),
#     url(r'^index/', 'nar_ui.views.index', name='index')

)
urlpatterns += static(settings.STATIC_URL)