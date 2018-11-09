import CMS from 'netlify-cms';
import PagePreview from './preview-templates/page-preview';
import PostPreview from './preview-templates/post-preview';

CMS.registerPreviewTemplate('page', PagePreview);
CMS.registerPreviewTemplate('post', PostPreview);
