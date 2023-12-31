/* eslint-disable react/prop-types */
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import useModal from '../context/useModal';
export default function Modal({ element }) {
  const { isOpen, closeModal, status } = useModal();
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10 ' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 w-full overflow-y-auto'>
            <div className='flex items-center justify-center min-h-full p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'>
                <Dialog.Panel
                  className={` w-full p-6 text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl dark:bg-gray-900`}
                  style={{ maxWidth: status === 'login' ? '28rem' : '32rem' }}>
                  {element}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
