import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ================= CREATE SERVICE =================
export const createService = async (req, res) => {
  try {
    const { title, description, points, image } = req.body;

    if (!title || !description || !image) {
      return res.status(400).json({
        success: false,
        message: "title, description and image are required",
      });
    }

    // Ensure points is array
    const pointsArray = Array.isArray(points) ? points : [];

    const service = await prisma.service.create({
      data: {
        title,
        description,
        points: pointsArray,
        image,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Service created successfully",
      service,
    });
  } catch (error) {
    console.error("Create Service Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to create service",
    });
  }
};

// ================= GET ALL SERVICES =================
export const getAllServices = async (req, res) => {
  try {
    const services = await prisma.service.findMany({
      orderBy: { createdAt: "desc" },
    });

    return res.status(200).json({
      success: true,
      services,
    });
  } catch (error) {
    console.error("Get All Services Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch services",
    });
  }
};

// ================= GET SINGLE SERVICE =================
export const getServiceById = async (req, res) => {
  try {
    const { id } = req.params;

    const service = await prisma.service.findUnique({
      where: { id },
    });

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    return res.status(200).json({
      success: true,
      service,
    });
  } catch (error) {
    console.error("Get Service By ID Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch service",
    });
  }
};

// ================= UPDATE SERVICE =================
export const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, points, image } = req.body;

    const dataToUpdate = {};

    if (title) dataToUpdate.title = title;
    if (description) dataToUpdate.description = description;
    if (image) dataToUpdate.image = image;

    if (points) {
      dataToUpdate.points = Array.isArray(points) ? points : [];
    }

    const updatedService = await prisma.service.update({
      where: { id },
      data: dataToUpdate,
    });

    return res.status(200).json({
      success: true,
      message: "Service updated successfully",
      service: updatedService,
    });
  } catch (error) {
    console.error("Update Service Error:", error);

    if (error.code === "P2025") {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to update service",
    });
  }
};

// ================= DELETE SERVICE =================
export const deleteService = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.service.delete({
      where: { id },
    });

    return res.status(200).json({
      success: true,
      message: "Service deleted successfully",
    });
  } catch (error) {
    console.error("Delete Service Error:", error);

    if (error.code === "P2025") {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to delete service",
    });
  }
};
