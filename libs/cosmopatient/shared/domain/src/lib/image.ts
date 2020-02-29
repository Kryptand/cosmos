import { ModalController, ToastController } from '@ionic/angular';
import { CameraOptions } from '@ionic-native/camera/ngx';

import { Camera } from '@ionic-native/camera/ngx';
import { Type } from '@angular/core';

export const createPictureComparisonToast = async (
  photos: any[],
  toastCtrl: ToastController,
  compareFn: Function
) => {
  if (!photos) {
    throw new Error('photos is not defined');
  }
  if (!toastCtrl) {
    throw new Error('toastCtrl is not defined');
  }
  if (!compareFn) {
    throw new Error('compareFn is not defined');
  }
  const toast = await toastCtrl.create({
    header: 'Vergleichen',
    message: `${photos.length} Elemente selektiert`,
    position: 'bottom',
    duration: 10000,
    buttons: [
      {
        icon: 'star',
        text: 'Vergleichen',
        handler: () => {
          compareFn();
        }
      },
      {
        text: 'Abbrechen',
        role: 'cancel',
        handler: () => {
          toast.remove();
        }
      }
    ]
  });
  return toast;
};
export const openComparisonModal = async (
  selectedPhotos: any[],
  modalController: ModalController
) => {
  const modal = await modalController.create({
    component: Type,
    componentProps: {
      images: selectedPhotos,
      popover: modalController
    },
    cssClass: 'image-overlay'
  });
  await modal.present();
};

export const getBase64ImageFromCamera = async (camera: Camera) => {
  const options: CameraOptions = {
    quality: 100,
    destinationType: camera.DestinationType.DATA_URL,
    encodingType: camera.EncodingType.JPEG,
    mediaType: camera.MediaType.PICTURE
  };
  const image = await camera.getPicture(options);
  const base64Image = `data:image/jpeg;base64,${image}`;
  return photoFromBase64String(base64Image);
};
export const photoFromBase64String = (imagestring: string): any => ({
  content: imagestring,
  fileName: 'uploadedImage',
  createdAt: Date.now().toString()
});
export const firstFileToBase64 = (fileImage: File): Promise<{}> => {
  return new Promise((resolve, reject) => {
    const fileReader: FileReader = new FileReader();
    if (fileReader && fileImage != null) {
      fileReader.readAsDataURL(fileImage);
      fileReader.onload = () => {
        resolve(photoFromBase64String(fileReader.result as string));
      };
      fileReader.onerror = error => {
        reject(error);
      };
    } else {
      reject(new Error('No file found'));
    }
  });
};
