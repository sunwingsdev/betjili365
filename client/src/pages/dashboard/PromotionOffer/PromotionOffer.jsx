import AddPromotionSection from "@/components/dashboard/promotionOffer/AddPromotionSection";
import PromotionCategoriesSection from "@/components/dashboard/promotionOffer/PromotionCategoriesSection";
import PromotionOfferCard from "@/components/dashboard/promotionOffer/PromotionOfferCard";
import DeleteModal from "@/components/shared/Modals/DeleteModal";
import { deleteImage } from "@/hooks/files";
import {
  useDeletePromotionMutation,
  useGetPromotionsQuery,
} from "@/redux/features/allApis/promotionApi/promotionApi";
import { useState } from "react";
import { useToasts } from "react-toast-notifications";

const PromotionOffer = () => {
  const { data: promotions, isLoading, refetch } = useGetPromotionsQuery();
  const [deletePromotion] = useDeletePromotionMutation();
  const [item, setItem] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { addToast } = useToasts();

  const handleDeleteButtonClick = (item) => {
    setIsOpen(true);
    setItem(item);
  };

  const handleDelete = async () => {
    try {
      const { message } = await deleteImage(item?.image);
      if (message) {
        const result = await deletePromotion(item?._id);
        if (result.data) {
          addToast("Promotion deleted successfully", {
            appearance: "success",
            autoDismiss: true,
          });
        }
        refetch();
        setIsOpen(false);
      }
    } catch (error) {
      addToast("Failed to delete promotion", {
        appearance: "success",
        autoDismiss: true,
      });
    }
  };

  return (
    <>
      <div className="rounded-md">
        <div className="bg-[#222222] flex flex-col md:flex-row items-start md:items-center justify-between p-4 mb-2">
          <div className="flex flex-row items-start justify-between w-full mb-4 md:mb-0">
            <h1 className="text-2xl text-white font-bold">Promotion Offers</h1>
          </div>
        </div>

        <div className="flex flex-col md:flex-row lg:space-x-6">
          <AddPromotionSection />
          <PromotionCategoriesSection />
        </div>

        <div className="mt-6">
          <div className="bg-[#222222] w-full mb-4 md:mb-0 p-4">
            <h1 className="text-2xl text-white font-bold">All Offers</h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 my-4 mt-4">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              promotions?.map((promotion) => (
                <PromotionOfferCard
                  key={promotion.id}
                  offer={promotion}
                  hidden={true}
                  handleDeleteButtonClick={handleDeleteButtonClick}
                />
              ))
            )}
          </div>
        </div>
      </div>

      <DeleteModal
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        handleDelete={handleDelete}
      ></DeleteModal>
    </>
  );
};

export default PromotionOffer;
